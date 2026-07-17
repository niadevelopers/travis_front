// ================================================================
// VISIBILITY TOGGLE SYSTEM - With clear visual distinction
// ================================================================

(function() {
    'use strict';
    
    // Configuration - CORRECT field indices
    const VISIBILITY_CONFIG = [
        {
            key: 'travis_vis_total_money',
            label: 'Total Money You Have',
            fieldIndex: 0  // First metric
        },
        {
            key: 'travis_vis_bills',
            label: 'Bills You Must Pay',
            fieldIndex: 1  // Second metric
        },
        {
            key: 'travis_vis_daily_spending',
            label: 'Daily Spending Amount',
            fieldIndex: 3  // FOURTH metric (skipping Days Until Month End)
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
    
    // Create toggle button with clear visual states
    function createToggleButton(config, isVisible) {
        const btn = document.createElement('button');
        btn.className = 'vis-toggle-btn';
        btn.dataset.key = config.key;
        btn.dataset.fieldIndex = config.fieldIndex;
        btn.setAttribute('aria-label', `Toggle ${config.label} visibility`);
        
        // Apply the appropriate visual state
        updateButtonVisuals(btn, isVisible);
        
        // Click handler
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            e.preventDefault();
            // Add click animation
            this.style.transform = 'scale(0.85)';
            setTimeout(() => { this.style.transform = 'scale(1)'; }, 150);
            toggleVisibility(this.dataset.key, parseInt(this.dataset.fieldIndex));
        });
        
        return btn;
    }
    
    // Update button visuals based on state
    function updateButtonVisuals(btn, isVisible) {
        if (isVisible) {
            // VISIBLE state - subtle
            btn.textContent = '👁️';
            btn.title = 'Click to hide amount';
            Object.assign(btn.style, {
                opacity: '0.4',
                color: '#999',
                background: 'transparent',
                transform: 'scale(1)',
                boxShadow: 'none'
            });
            btn.setAttribute('data-state', 'visible');
        } else {
            // HIDDEN state - clearly visible
            btn.textContent = '👁️';
            btn.title = 'Click to show amount';
            Object.assign(btn.style, {
                opacity: '1',
                color: '#0078D4',
                background: 'rgba(0, 120, 212, 0.08)',
                transform: 'scale(1)',
                boxShadow: '0 0 12px rgba(0, 120, 212, 0.15)'
            });
            btn.setAttribute('data-state', 'hidden');
        }
    }
    
    // Apply visibility to a single field
    function applyVisibilityToField(card, isVisible, config) {
        const valueEl = getValueElement(card);
        if (!valueEl) {
            console.warn('No value element found for', config.label);
            return;
        }
        
        // Store original value if not already stored
        if (!card.dataset.originalValue) {
            card.dataset.originalValue = valueEl.textContent;
        }
        
        // Update the value display
        if (isVisible) {
            // Show actual value
            valueEl.textContent = card.dataset.originalValue;
            valueEl.style.letterSpacing = 'normal';
            valueEl.style.fontFamily = '';
            valueEl.style.color = '';
            valueEl.style.opacity = '1';
            valueEl.style.transition = 'none';
            
            // Remove any privacy indicator
            const indicator = card.querySelector('.privacy-indicator');
            if (indicator) indicator.remove();
            
        } else {
            // Hide with mosaic style - clear indication of privacy mode
            valueEl.textContent = '••••••';
            valueEl.style.letterSpacing = '3px';
            valueEl.style.fontFamily = 'monospace';
            valueEl.style.color = '#999';
            valueEl.style.opacity = '0.6';
            valueEl.style.transition = 'none';
            
            // Add a small privacy indicator (lock icon or badge)
            let indicator = card.querySelector('.privacy-indicator');
            if (!indicator) {
                indicator = document.createElement('span');
                indicator.className = 'privacy-indicator';
                indicator.textContent = '🔒';
                indicator.style.cssText = `
                    font-size: 10px;
                    margin-left: 4px;
                    opacity: 0.7;
                    display: inline-block;
                `;
                // Add after the value
                valueEl.parentNode.insertBefore(indicator, valueEl.nextSibling);
            }
        }
        
        // Update the toggle button
        const existingBtn = card.querySelector('.vis-toggle-btn');
        if (existingBtn) {
            updateButtonVisuals(existingBtn, isVisible);
        }
        
        // Add a subtle highlight/glow effect to the card when hidden
        if (isVisible) {
            card.style.boxShadow = '';
            card.style.transition = 'box-shadow 0.3s ease';
        } else {
            card.style.boxShadow = '0 2px 12px rgba(0, 120, 212, 0.06)';
            card.style.transition = 'box-shadow 0.3s ease';
        }
    }
    
    // Apply all visibility states
    function applyAllVisibility() {
        const cards = getMetricCards();
        console.log('Found', cards.length, 'metric cards');
        
        if (cards.length < 4) {
            console.log('Not enough cards yet, retrying...');
            setTimeout(applyAllVisibility, 300);
            return;
        }
        
        VISIBILITY_CONFIG.forEach((config) => {
            const card = cards[config.fieldIndex];
            if (card) {
                const isVisible = getVisibility(config.key);
                applyVisibilityToField(card, isVisible, config);
            } else {
                console.warn('Card not found for:', config.label, 'at index:', config.fieldIndex);
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
    
    // Add toggle buttons to metric cards
    function addToggleButtons() {
        const cards = getMetricCards();
        console.log('Adding toggle buttons, found', cards.length, 'cards');
        
        if (cards.length < 4) {
            setTimeout(addToggleButtons, 300);
            return;
        }
        
        VISIBILITY_CONFIG.forEach((config) => {
            const card = cards[config.fieldIndex];
            if (!card) {
                console.warn('No card at index', config.fieldIndex, 'for', config.label);
                return;
            }
            
            // Skip if button already exists
            if (card.querySelector('.vis-toggle-btn')) {
                return;
            }
            
            const isVisible = getVisibility(config.key);
            const btn = createToggleButton(config, isVisible);
            
            // Add button next to the label
            const labelEl = getLabelElement(card);
            if (labelEl) {
                labelEl.style.display = 'inline-flex';
                labelEl.style.alignItems = 'center';
                labelEl.style.gap = '4px';
                labelEl.appendChild(btn);
                console.log('✅ Added toggle to:', config.label);
            } else {
                console.warn('No label element for:', config.label);
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
                        console.log('Header updated, reapplying visibility...');
                        applyAllVisibility();
                        setTimeout(addToggleButtons, 100);
                    }, 200);
                };
                
                console.log('✅ Hooked into updateHeader function');
            }
        }, 100);
        
        setTimeout(() => clearInterval(checkInterval), 10000);
    }
    
    // Add styles with clear visual distinction
    function addStyles() {
        const style = document.createElement('style');
        style.id = 'vis-toggle-styles';
        style.textContent = `
            /* Base button style */
            .vis-toggle-btn {
                background: transparent !important;
                border: none !important;
                cursor: pointer !important;
                font-size: 15px !important;
                padding: 4px !important;
                margin-left: 6px !important;
                border-radius: 50% !important;
                transition: all 0.2s ease !important;
                line-height: 1 !important;
                user-select: none !important;
                touch-action: manipulation !important;
                width: 28px !important;
                height: 28px !important;
                display: inline-flex !important;
                align-items: center !important;
                justify-content: center !important;
                position: relative !important;
                flex-shrink: 0 !important;
            }
            
            /* VISIBLE state - subtle */
            .vis-toggle-btn[data-state="visible"] {
                opacity: 0.35 !important;
                color: #999 !important;
                background: transparent !important;
                box-shadow: none !important;
                transform: scale(1) !important;
            }
            
            .vis-toggle-btn[data-state="visible"]:hover {
                opacity: 0.7 !important;
                background: rgba(0,0,0,0.04) !important;
                transform: scale(1.05) !important;
            }
            
            /* HIDDEN state - clearly visible and active */
            .vis-toggle-btn[data-state="hidden"] {
                opacity: 1 !important;
                color: #0078D4 !important;
                background: rgba(0, 120, 212, 0.1) !important;
                box-shadow: 0 0 16px rgba(0, 120, 212, 0.15) !important;
                transform: scale(1) !important;
                animation: visPulse 2s ease-in-out infinite !important;
            }
            
            .vis-toggle-btn[data-state="hidden"]:hover {
                background: rgba(0, 120, 212, 0.18) !important;
                box-shadow: 0 0 24px rgba(0, 120, 212, 0.25) !important;
                transform: scale(1.08) !important;
            }
            
            /* Click animation */
            .vis-toggle-btn:active {
                transform: scale(0.85) !important;
                transition: transform 0.1s ease !important;
            }
            
            /* Pulse animation when hidden - draws attention to privacy mode */
            @keyframes visPulse {
                0%, 100% {
                    box-shadow: 0 0 16px rgba(0, 120, 212, 0.15);
                }
                50% {
                    box-shadow: 0 0 20px rgba(0, 120, 212, 0.25);
                }
            }
            
            /* Privacy indicator (lock icon) when hidden */
            .privacy-indicator {
                font-size: 10px !important;
                margin-left: 4px !important;
                opacity: 0.6 !important;
                display: inline-block !important;
                animation: lockFade 0.3s ease !important;
            }
            
            @keyframes lockFade {
                0% { opacity: 0; transform: scale(0.8); }
                100% { opacity: 0.6; transform: scale(1); }
            }
            
            /* Card glow effect when hidden */
            .metric-card:has(.vis-toggle-btn[data-state="hidden"]) {
                transition: box-shadow 0.3s ease !important;
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
            
            /* Responsive */
            @media (max-width: 480px) {
                .vis-toggle-btn {
                    font-size: 13px !important;
                    width: 24px !important;
                    height: 24px !important;
                }
            }
            
            /* Dark mode support */
            @media (prefers-color-scheme: dark) {
                .vis-toggle-btn[data-state="visible"]:hover {
                    background: rgba(255,255,255,0.06) !important;
                }
                .vis-toggle-btn[data-state="hidden"] {
                    background: rgba(0, 120, 212, 0.15) !important;
                }
                .vis-toggle-btn[data-state="hidden"]:hover {
                    background: rgba(0, 120, 212, 0.25) !important;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Initialize everything
    function initVisibilityToggle() {
        console.log('🔒 Initializing privacy toggles with visual distinction...');
        console.log('Target fields:');
        VISIBILITY_CONFIG.forEach(c => console.log('  -', c.label, '(index:', c.fieldIndex, ')'));
        console.log('');
        console.log('Visual states:');
        console.log('  👁️ Gray  = Visible (tap to hide)');
        console.log('  👁️ Blue  = Hidden (tap to show)');
        console.log('  🔒 Lock  = Privacy mode active');
        
        addStyles();
        hookIntoUpdateHeader();
        
        window.addEventListener('load', function() {
            setTimeout(() => {
                applyAllVisibility();
                setTimeout(addToggleButtons, 200);
            }, 800);
        });
        
        setTimeout(() => {
            applyAllVisibility();
            setTimeout(addToggleButtons, 100);
        }, 1500);
        
        setTimeout(() => {
            applyAllVisibility();
            setTimeout(addToggleButtons, 100);
        }, 3000);
        
        // Expose for debugging
        window.visToggle = {
            getVisibility: getVisibility,
            setVisibility: setVisibility,
            toggle: toggleVisibility,
            applyAll: applyAllVisibility,
            addButtons: addToggleButtons,
            config: VISIBILITY_CONFIG,
            getCards: getMetricCards
        };
        
        console.log('');
        console.log('✅ Ready! Click the 👁️ icon next to each amount.');
        console.log('📌 Clear visual distinction:');
        console.log('   - 👁️ Gray = Amount visible');
        console.log('   - 👁️ Blue with glow = Amount hidden (privacy mode)');
    }
    
    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initVisibilityToggle);
    } else {
        initVisibilityToggle();
    }
    
})();
