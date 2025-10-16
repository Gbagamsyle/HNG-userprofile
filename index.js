    document.addEventListener("DOMContentLoaded", () => {
      const timeElement = document.getElementById("user-time");
      if (timeElement) {
        const updateTime = () => {
          const currentTime = Date.now();
          timeElement.textContent = `Time : ${currentTime}`;
        };
        updateTime(); 
        setInterval(updateTime, 1000);
      }
    });