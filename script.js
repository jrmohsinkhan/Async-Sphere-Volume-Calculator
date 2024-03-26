document.addEventListener("DOMContentLoaded", function() {
    const calculateBtn = document.getElementById("calculateBtn");
    calculateBtn.addEventListener("click", async function() {
      let radius = prompt("Enter the radius (r) of the sphere:");
      
      if (radius === null || radius.trim() === "") {
        alert("Please enter a valid radius.");
        return;
      }
  
      radius = parseFloat(radius);
  
      if (isNaN(radius)) {
        alert("Please enter a valid radius.");
        return;
      }
  
      try {
        const volume = await calculateVolume(radius);
        document.getElementById("result").innerText = `Volume of the sphere: ${volume.toFixed(2)} cubic units`;
      } catch (error) {
        console.error("Error:", error);
        alert("Error calculating volume. Please try again.");
      }
    });
  });
  
  const calculateVolume = async (radius) => {
    try {
      const fetchedRadius = await fetchData(radius, 1000);
      const volume = (4 / 3) * Math.PI * Math.pow(fetchedRadius, 3);
      return volume;
    } catch (error) {
      console.error("Error calculating volume:", error);
      throw error;
    }
  };
  
  const fetchData = (value, delay) => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(value);
      }, delay);
    });
  };
  