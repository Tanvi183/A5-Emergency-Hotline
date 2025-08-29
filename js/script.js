// Api For exact time
async function getExactTime() {
  try {
    const response = await fetch("https://worldtimeapi.org/api/timezone/Etc/UTC");
    const data = await response.json();
    return data.datetime;
  } catch (error) {
    console.error("Failed to get exact time:", error);
    return new Date().toISOString(); // fallback
  }
}


// function to get innertext
function getInnerText(id) {
  const element = parseInt(document.getElementById(id).innerText);
  return element;
}

// function to set innertext
function setInnerText(value) {
  const availableBalance = document.getElementById("total-coin");
  availableBalance.innerText = value;
}



// Life Line Counter Section
let totalLifeLine = 0;

const lifeLineStore = document.getElementById("lifeLineStore");
const buttons = document.querySelectorAll(".increment-btn");

for (const btn of buttons) {
  btn.addEventListener("click", function () {
    totalLifeLine++;
    lifeLineStore.innerText = totalLifeLine;
  });
}



// Call Related Section
const transactionData = [];

function callButton(id, name, number) {
  document
    .getElementById(id)
    .addEventListener("click", async function () {

      const availableBalance = getInnerText("total-coin");

      const serviceName = document.getElementById(name).innerText;
      const serviceNumber = document.getElementById(number).innerText;

      // Condition to check coin amount
      if (availableBalance < 20) {
        alert(
          "You do not have enough coins to make this call. You need at least 20 coins."
        );
        return;
      }

      const totalNewAvailableBalance = availableBalance - 20;
      setInnerText(totalNewAvailableBalance);

      // For Exect time
      const exactTime = await getExactTime();

      // History Store
      const history = {
        name: serviceName,
        number: serviceNumber,
        date: new Date(exactTime).toLocaleTimeString(),
      };

      transactionData.push(history);
      // console.log(transactionData);


      // History Show
      const historyContainer = document.getElementById("history-container");

      historyContainer.innerHTML = "";
      for (const data of transactionData) {
        const div = document.createElement("div");
        div.innerHTML = `
                  <div  class="bg-gray-100 p-3 rounded-md flex justify-between items-center mb-3">
                    <div class="space-y-1">
                        <h1 class="text-[15px] font-bold">${data.name}</h1>
                        <p class="text-sm">${data.number}</p>
                    </div>
                    <div>
                        <p>${data.date}</p>
                    </div>
                  </div>
                `;
            historyContainer.appendChild(div);
        }

      alert(`Calling ${serviceName} : ${serviceNumber}`);
      return;
    });
}

// Call function
callButton("emergency-call-btn", "emergency-service", "emergency-service-number");
callButton("police-call-btn", "police-helpline", "police-helpline-number");
callButton("fire-call-btn", "fire-service", "fire-service-number");
callButton("ambulance-call-btn", "ambulance-service", "ambulance-service-number");
callButton("wo&child-call-btn", "wo&child-helpline", "wo&child-helpline-number");
callButton("anti-corruption-call-btn", "anti-corruption-helpline", "anti-corruption-helpline-number");
callButton("electricity-call-btn", "electricity-helpline", "electricity-helpline-number");
callButton("brac-call-btn", "brac-helpline", "brac-helpline-number");
callButton("railway-call-btn", "railway-helpline", "railway-helpline-number");




// History Clear Button 
document.getElementById("history-clear").addEventListener("click", function(){
  const historyContainer = document.getElementById("history-container");
  const confirmClear = confirm("Are you sure to delete the history?");

  if (confirmClear) {
    historyContainer.innerHTML = "";
  }
});



// Copy Section
let totalCopy = 0;

function CopyButton(id, number) {
  document
    .getElementById(id)
    .addEventListener("click", function () {

      const copyStore = document.getElementById("total-copy");
      const serviceNumber = document.getElementById(number).innerText;
      const confirmCopy = confirm("Are you sure you want to copy this number?");

      if(confirmCopy) {
        navigator.clipboard.writeText(serviceNumber);
        totalCopy++;
        copyStore.innerText = totalCopy;
      }
    });
}


// Copy function call
CopyButton("emergency-copy-btn", "emergency-service-number");
CopyButton("police-copy-btn", "police-helpline-number");
CopyButton("fire-copy-btn", "fire-service-number");
CopyButton("ambulance-copy-btn", "ambulance-service-number");
CopyButton("wo&child-copy-btn", "wo&child-helpline-number");
CopyButton("anti-corruption-copy-btn", "anti-corruption-helpline-number");
CopyButton("electricity-copy-btn", "electricity-helpline-number");
CopyButton("brac-copy-btn", "brac-helpline-number");
CopyButton("railway-copy-btn", "railway-helpline-number");
