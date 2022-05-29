document.querySelector('button').addEventListener('click', getCoinFlip);

async function getCoinFlip() {
  try {
    const coinFlip = await fetch('/api/flip');
    const json = await coinFlip.json();
    document.getElementById('result').innerHTML = json["result"];
  } catch (error) {
    console.error(`Found an error with ${error}`);
  }
}
