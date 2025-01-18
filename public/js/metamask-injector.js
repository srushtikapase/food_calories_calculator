function injectEthereum() {
    if (typeof window.ethereum === 'undefined' && window.parent.ethereum) {
        window.ethereum = window.parent.ethereum;
        console.log('Injected parent window ethereum object');
    } else if (typeof window.ethereum === 'undefined') {
        console.log('MetaMask not detected in parent window');
    }
}

// Try to inject immediately
injectEthereum();

// Also try again after a short delay
setTimeout(injectEthereum, 1000); 