export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      handleAccountsChanged(accounts);
    } catch (error) {
      console.error("Error connecting to MetaMask", error);
      alert("Error connecting to MetaMask. Please try again.");
    }
  } else {
    alert("MetaMask is not installed. Please install it to continue.");
    window.open("https://metamask.io/download/", "_blank");
  }
};

export const handleAccountsChanged = (accounts) => {
  const connectWalletBtn = document.getElementById("connect-wallet-btn");
  if (connectWalletBtn) {
    if (accounts.length > 0) {
      connectWalletBtn.innerHTML = "<span>Game Start</span>";
      connectWalletBtn.id = "connect-wallet-btn";
    } else {
      connectWalletBtn.innerHTML = "<span>Connect Wallet</span>";
      connectWalletBtn.id = "connect-wallet-btn";
    }
  }
};

export const checkWalletConnection = async () => {
  if (window.ethereum) {
    try {
      const accounts = await window.ethereum.request({ method: "eth_accounts" });
      handleAccountsChanged(accounts);

      window.ethereum.on("accountsChanged", handleAccountsChanged);
    } catch (error) {
      console.error("Could not get accounts", error);
    }
  }
};