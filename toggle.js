// ================================================================
// VISIBILITY TOGGLE SYSTEM - Clean M-Pesa/PayPal Style
// Only for: Total Money, Bills You Must Pay, Daily Spending Amount
// ================================================================

(function() {
    'use strict';
    
    // Configuration - ONLY these 3 fields
    const VISIBILITY_CONFIG = [
        {
            key: 'travis_vis_total_money',
            label: 'Total Money You Have',
            fieldIndex: 0  // First metric card
        },
        {
            key: 'travis_vis_bills',
            label: 'Bills You Must Pay',
            fieldIndex: 1  // Second metric card
        },
        {
            key: 'travis_vis_daily_spending',
            label: 'Daily Spending Amount',
            fieldIndex: 2  // Third metric card
        }
    ];
    
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
    
    // Create toggle button - just a simple eye icon
    function createToggleButton(config, isVisible) {
        const btn = document.createElement('button');
        btn.className = 'vis-toggle-btn';
        btn.dataset.key = config.key;
        btn.dataset.fieldIndex = config.fieldIndex;
        btn.textContent = '👁️';
        btn.title = isVisible ? 'Hide amount' : 'Show amount';
        btn.setAttribute('aria-label', `Toggle ${config.label} visibility`);
        
        // Minimal styling - clean and unobtrusive
        Object.assign(btn.style, {
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            fontSize: '14px',
            padding: '2px 4px',
            marginLeft: '4px',
            borderRadius: '3px',
            opacity: isVisible ? '0.5' : '0.8',
            transition: 'opacity 0.15s',
            lineHeight: '1',
            color: isVisible ? '#666' : '#0078D4'
        });
        
        // Hover effect - subtle
        btn.addEventListener('mouseenter', () => { 
            btn.style.opacity = '1';
            btn.style.background = 'rgba(0,0,0,0.04)';
        });
        btn.addEventListener('mouseleave', () => { 
            btn.style.opacity = isVisible ? '0.5' : '0.8';
            btn.style.background = 'transparent';
        });
        
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
            valueEl.style.color = '';
        } else {
            // Hide with mosaic style
            valueEl.textContent = '••••••';
            valueEl.style.letterSpacing = '2px';
            valueEl.style.fontFamily = 'monospace';
            valueEl.style.color = '#999';
        }
        
        // Update the toggle button
        const existingBtn = card.querySelector('.vis-toggle-btn');
        if (existingBtn) {
            existingBtn.style.opacity = isVisible ? '0.5' : '0.8';
            existingBtn.style.color = isVisible ? '#666' : '#0078D4';
            existingBtn.title = isVisible ? 'Hide amount' : 'Show amount';
        }
    }
    
    // Apply all visibility states
    function applyAllVisibility() {
        const cards = getMetricCards();
        if (cards.length < 3) {
            setTimeout(applyAllVisibility, 200);
            return;
        }
        
        VISIBILITY_CONFIG.forEach((config) => {
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
        
        const cards = getMetricCards();
        const card = cards[fieldIndex];
        if (card) {
            const config = VISIBILITY_CONFIG.find(c => c.key === key);
            if (config) {
                applyVisibilityToField(card, newState, config);
            }
        }
    }
    
    // Add toggle buttons to metric cards - only for the 3 fields
    function addToggleButtons() {
        const cards = getMetricCards();
        if (cards.length < 3) {
            setTimeout(addToggleButtons, 300);
            return;
        }
        
        VISIBILITY_CONFIG.forEach((config) => {
            const card = cards[config.fieldIndex];
            if (!card) return;
            
            // Skip if button already exists
            if (card.querySelector('.vis-toggle-btn')) return;
            
            const isVisible = getVisibility(config.key);
            const btn = createToggleButton(config, isVisible);
            
            // Add button next to the label
            const labelEl = getLabelElement(card);
            if (labelEl) {
                labelEl.style.display = 'inline-flex';
                labelEl.style.alignItems = 'center';
                labelEl.style.gap = '2px';
                labelEl.appendChild(btn);
            }
        });
    }
    
    // Hook into the existing updateHeader function
    function hookIntoUpdateHeader() {
        const checkInterval = setInterval(() => {
            if (typeof window.updateHeader === 'function') {
                clearInterval(checkInterval);
                
                const originalUpdateHeader = window.updateHeader;
                
                window.updateHeader = function(financialData) {
                    originalUpdateHeader(financialData);
                    
                    setTimeout(() => {
                        applyAllVisibility();
                        setTimeout(addToggleButtons, 50);
                    }, 150);
                };
                
                console.log('✅ Visibility toggle active for 3 fields');
            }
        }, 100);
        
        setTimeout(() => clearInterval(checkInterval), 10000);
    }
    
    // Add minimal CSS
    function addStyles() {
        const style = document.createElement('style');
        style.id = 'vis-toggle-styles';
        style.textContent = `
            .vis-toggle-btn {
                background: transparent !important;
                border: none !important;
                cursor: pointer !important;
                font-size: 14px !important;
                padding: 2px 4px !important;
                margin-left: 4px !important;
                border-radius: 3px !important;
                opacity: 0.5 !important;
                transition: opacity 0.15s, background 0.15s !important;
                line-height: 1 !important;
                user-select: none !important;
                touch-action: manipulation !important;
                color: #666 !important;
                display: inline-flex !important;
                align-items: center !important;
                justify-content: center !important;
                width: 20px !important;
                height: 20px !important;
                padding: 0 !important;
            }
            .vis-toggle-btn:hover {
                opacity: 1 !important;
                background: rgba(0,0,0,0.04) !important;
            }
            .vis-toggle-btn:active {
                transform: scale(0.9) !important;
            }
            .vis-toggle-btn:focus-visible {
                outline: 2px solid #0078D4 !important;
                outline-offset: 2px !important;
            }
            
            .metric-card .metric-label {
                display: inline-flex !important;
                align-items: center !important;
                gap: 2px !important;
            }
            
            .metric-card .metric-value {
                transition: none !important;
                font-variant-numeric: tabular-nums;
            }
            
            @media (max-width: 480px) {
                .vis-toggle-btn {
                    font-size: 12px !important;
                    width: 18px !important;
                    height: 18px !important;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Initialize everything
    function initVisibilityToggle() {
        console.log('🔒 Initializing privacy toggles for 3 fields...');
        
        addStyles();
        hookIntoUpdateHeader();
        
        window.addEventListener('load', function() {
            setTimeout(() => {
                applyAllVisibility();
                setTimeout(addToggleButtons, 100);
            }, 500);
        });
        
        setTimeout(() => {
            applyAllVisibility();
            setTimeout(addToggleButtons, 100);
        }, 1000);
        
        // Expose for debugging
        window.visToggle = {
            getVisibility: getVisibility,
            setVisibility: setVisibility,
            toggle: toggleVisibility,
            applyAll: applyAllVisibility,
            addButtons: addToggleButtons,
            config: VISIBILITY_CONFIG
        };
        
        console.log('✅ Ready. Click 👁️ next to: Total Money, Bills, Daily Spending');
    }
    
    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initVisibilityToggle);
    } else {
        initVisibilityToggle();
    }
    
})();
