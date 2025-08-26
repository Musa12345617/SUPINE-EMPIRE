const webhookURL = "https://discord.com/api/webhooks/1409905677320720454/qTLq8WfWtIOwZrCZKX-qILUJHWvGZv8-ULmyfpvD1zXzk6pAzPfm2aZgm7uVFxXmCrJm";

async function sendMsg() {
  const content = document.getElementById("msg").value;
  if (!content) return alert("Send Message");

  await fetch(webhookURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content })
  });

  alert("Done");
}
