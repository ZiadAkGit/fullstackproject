const donationForm = document.getElementById("donationForm");
const thankYouMessage = document.getElementById("thankYouMessage");
const donations = [];

donationForm.addEventListener("submit", (event) => {
	event.preventDefault();
	const name = event.target.name.value;
	const email = event.target.email.value;
	const amount = event.target.amount.value;
	donations.push({ name, email, amount });
	donationForm.reset();
	thankYouMessage.innerText = `${
		donations[donations.length - 1]["name"]
	}🥳\nThank you for your donation!🐾🙏💲`;
	thankYouMessage.classList.remove("hidden");
	setTimeout(() => {
		thankYouMessage.classList.add("hidden");
	}, 5000);
});
