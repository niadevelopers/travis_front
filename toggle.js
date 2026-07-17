// ================================================================
// VISIBILITY TOGGLE SYSTEM - M-Pesa/PayPal Style
// Persists across page refreshes using localStorage
// ================================================================

(function() {
    'use strict';
    
    // Configuration
    const VISIBILITY_CONFIG = {
        TOTAL_MONEY: {
            key: 'travis_vis_total_money',
            label: 'Total Money',
            emoji: '💰',
            fieldIndex: 0
        },
        BILLS: {
            key: 'travis_vis_bills',
            label: 'Bills',
            emoji: '📋',
            fieldIndex: 1
        },
        DAILY_SPENDING: {
            key: 'travis_vis_daily_spending',
            label: 'Daily Spending',
            emoji: '📊',
            fieldIndex: 2
        }
    };
    
    // Get visibility state from localStorage
    function getVisibility(key) {
        try {
            const value = localStorage.getItem(key);
            return value === null ? true : value === 'true';
        } catch (e) {
            return true;
        }
    }
    
    // Set visibility state to localStorage
    function setVisibility(key, isVisible) {
        try {
            localStorage.setItem(key, String(isVisible));
        } catch (e) {
            console.warn('Failed to save visibility state:', e);
        }
    }
    
    // Get all metric cards
    function getMetricCards() {
        return document.querySelectorAll('.metric-card');
    }
    
    // Get the value element within a metric card
    function getValueElement(card) {
        return card ? card.querySelector('.metric-value') : null;
    }
    
    // Get the label element within a metric card
    function getLabelElement(card) {
        return card ? card.querySelector('.metric-label') : null;
    }
    
    // Create toggle button
    function createToggleButton(config, isVisible) {
        const btn = document.createElement('button');
        btn.className = 'vis-toggle-btn';
        btn.dataset.key = config.key;
        btn.dataset.fieldIndex = config.fieldIndex;
        btn.innerHTML = isVisible ? '👁️' : '🚫👁️';
        btn.title = isVisible ? 'Tap to hide amount' : 'Tap to show amount';
        btn.setAttribute('aria-label', `Toggle ${config.label} visibility`);
        
        // Style the button
        Object.assign(btn.style, {
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            fontSize: '16px',
            padding: '2px 6px',
            marginLeft: '8px',
            borderRadius: '4px',
            opacity: '0.6',
            transition: 'opacity 0.2s, transform 0.1s',
            lineHeight: '1',
            position: 'relative',
            top: '-1px'
        });
        
        // Hover effects
        btn.addEventListener('mouseenter', () => { btn.style.opacity = '1'; });
        btn.addEventListener('mouseleave', () => { btn.style.opacity = '0.6'; });
        
        // Click handler
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            e.preventDefault();
            toggleVisibility(this.dataset.key, parseInt(this.dataset.fieldIndex));
        });
        
        return btn;
    }
    
    // Apply visibility to a single field
    function applyVisibilityToField(card, isVisible, config) {
        const valueEl = getValueElement(card);
        if (!valueEl) return;
        
        // Store original value if not already stored
        if (!card.dataset.originalValue) {
            card.dataset.originalValue = valueEl.textContent;
        }
        
        if (isVisible) {
            // Show actual value
            valueEl.textContent = card.dataset.originalValue;
            valueEl.style.letterSpacing = 'normal';
            valueEl.style.fontFamily = '';
            valueEl.style.opacity = '1';
        } else {
            // Hide with mosaic style
            valueEl.textContent = '••••••••';
            valueEl.style.letterSpacing = '3px';
            valueEl.style.fontFamily = 'monospace';
            valueEl.style.opacity = '0.6';
        }
        
        // Update the toggle button icon if it exists
        const existingBtn = card.querySelector('.vis-toggle-btn');
        if (existingBtn) {
            existingBtn.innerHTML = isVisible ? '👁️' : '🚫👁️';
            existingBtn.title = isVisible ? 'Tap to hide amount' : 'Tap to show amount';
        }
    }
    
    // Apply all visibility states
    function applyAllVisibility() {
        const cards = getMetricCards();
        if (cards.length < 3) {
            // Not ready yet, retry
            setTimeout(applyAllVisibility, 200);
            return;
        }
        
        const configs = Object.values(VISIBILITY_CONFIG);
        configs.forEach((config) => {
            const card = cards[config.fieldIndex];
            if (card) {
                const isVisible = getVisibility(config.key);
                applyVisibilityToField(card, isVisible, config);
            }
        });
    }
    
    // Toggle visibility
    function toggleVisibility(key, fieldIndex) {
        const currentState = getVisibility(key);
        const newState = !currentState;
        setVisibility(key, newState);
        
        // Update the UI
        const cards = getMetricCards();
        const card = cards[fieldIndex];
        if (card) {
            const config = Object.values(VISIBILITY_CONFIG).find(c => c.key === key);
            if (config) {
                applyVisibilityToField(card, newState, config);
            }
        }
    }
    
    // Add toggle buttons to metric cards
    function addToggleButtons() {
        const cards = getMetricCards();
        if (cards.length < 3) {
            // Not ready yet, retry
            setTimeout(addToggleButtons, 300);
            return;
        }
        
        const configs = Object.values(VISIBILITY_CONFIG);
        let foundAll = true;
        
        configs.forEach((config) => {
            const card = cards[config.fieldIndex];
            if (!card) {
                foundAll = false;
                return;
            }
            
            // Check if button already exists
            if (card.querySelector('.vis-toggle-btn')) {
                return;
            }
            
            const isVisible = getVisibility(config.key);
            const btn = createToggleButton(config, isVisible);
            
            // Add the button to the label
            const labelEl = getLabelElement(card);
            if (labelEl) {
                // Make label flex to accommodate the button
                labelEl.style.display = 'flex';
                labelEl.style.alignItems = 'center';
                labelEl.style.gap = '4px';
                
                // Insert the button
                labelEl.appendChild(btn);
            } else {
                // Fallback: add to card header
                const header = card.querySelector('.metric-accent');
                if (header) {
                    header.style.display = 'flex';
                    header.style.alignItems = 'center';
                    header.style.gap = '6px';
                    header.appendChild(btn);
                }
            }
        });
        
        if (!foundAll) {
            setTimeout(addToggleButtons, 500);
        }
    }
    
    // Hook into the existing updateHeader function
    function hookIntoUpdateHeader() {
        // Wait for the original updateHeader to be defined
        const checkInterval = setInterval(() => {
            if (typeof window.updateHeader === 'function' && 
                window.updateHeader.toString().includes('Total Money')) {
                clearInterval(checkInterval);
                
                // Store reference to original function
                const originalUpdateHeader = window.updateHeader;
                
                // Override with our version
                window.updateHeader = function(financialData) {
                    // Call original
                    originalUpdateHeader(financialData);
                    
                    // Apply our visibility states after a short delay
                    setTimeout(() => {
                        applyAllVisibility();
                        // Ensure toggle buttons exist
                        setTimeout(addToggleButtons, 100);
                    }, 150);
                };
                
                console.log('✅ Visibility toggle hooked into updateHeader');
            }
        }, 100);
        
        // Safety timeout
        setTimeout(() => clearInterval(checkInterval), 10000);
    }
    
    // Handle dynamic DOM updates (for when nav changes)
    function setupMutationObserver() {
        const targetNode = document.querySelector('#app-content') || document.body;
        if (!targetNode) return;
        
        const observer = new MutationObserver(function(mutations) {
            let shouldUpdate = false;
            
            mutations.forEach(function(mutation) {
                if (mutation.addedNodes.length > 0) {
                    mutation.addedNodes.forEach(function(node) {
                        if (node.nodeType === 1) { // Element
                            // Check if this is a new metric card or contains one
                            if (node.classList && node.classList.contains('metric-card')) {
                                shouldUpdate = true;
                            }
                            if (node.querySelectorAll) {
                                const cards = node.querySelectorAll('.metric-card');
                                if (cards.length > 0) shouldUpdate = true;
                            }
                        }
                    });
                }
            });
            
            if (shouldUpdate) {
                setTimeout(() => {
                    applyAllVisibility();
                    setTimeout(addToggleButtons, 100);
                }, 200);
            }
        });
        
        observer.observe(targetNode, {
            childList: true,
            subtree: true
        });
        
        return observer;
    }
    
    // Add CSS styles
    function addStyles() {
        const style = document.createElement('style');
        style.id = 'vis-toggle-styles';
        style.textContent = `
            .vis-toggle-btn {
                background: transparent !important;
                border: none !important;
                cursor: pointer !important;
                font-size: 16px !important;
                padding: 2px 6px !important;
                margin-left: 6px !important;
                border-radius: 4px !important;
                opacity: 0.5 !important;
                transition: opacity 0.2s, transform 0.1s !important;
                line-height: 1 !important;
                user-select: none !important;
                touch-action: manipulation !important;
            }
            .vis-toggle-btn:hover {
                opacity: 1 !important;
                background: rgba(0,0,0,0.05) !important;
            }
            .vis-toggle-btn:active {
                transform: scale(0.85) !important;
            }
            .vis-toggle-btn:focus-visible {
                outline: 2px solid #0078D4 !important;
                outline-offset: 2px !important;
            }
            
            .metric-card .metric-value {
                transition: none !important;
                font-variant-numeric: tabular-nums;
            }
            
            /* Mobile responsive */
            @media (max-width: 480px) {
                .vis-toggle-btn {
                    font-size: 14px !important;
                    padding: 2px 4px !important;
                }
            }
            
            /* Dark mode support if needed */
            @media (prefers-color-scheme: dark) {
                .vis-toggle-btn:hover {
                    background: rgba(255,255,255,0.08) !important;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Initialize everything
    function initVisibilityToggle() {
        console.log('🔄 Initializing visibility toggle system...');
        
        // Add styles
        addStyles();
        
        // Hook into updateHeader
        hookIntoUpdateHeader();
        
        // Set up mutation observer for dynamic updates
        setupMutationObserver();
        
        // Initial apply after everything loads
        window.addEventListener('load', function() {
            setTimeout(() => {
                applyAllVisibility();
                setTimeout(addToggleButtons, 200);
            }, 500);
        });
        
        // Also run after a short delay for initial render
        setTimeout(() => {
            applyAllVisibility();
            setTimeout(addToggleButtons, 100);
        }, 1000);
        
        // Expose functions globally for debugging/inspection
        window.visToggle = {
            getVisibility: getVisibility,
            setVisibility: setVisibility,
            toggle: toggleVisibility,
            applyAll: applyAllVisibility,
            addButtons: addToggleButtons,
            config: VISIBILITY_CONFIG
        };
        
        console.log('✅ Visibility toggle system initialized. Each field has independent privacy control.');
        console.log('💡 Users can click the 👁️/🚫👁️ icon next to each amount to toggle visibility.');
        console.log('💾 Settings are saved to localStorage and persist across page refreshes.');
    }
    
    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initVisibilityToggle);
    } else {
        initVisibilityToggle();
    }
    
})();
