//your JS code here. If required.
function removeColor() {
	let select = document.getElementById("colorSelect");
	let selectedOption = select.selectedIndex;

	if (selectedOption !== -1) {
		select.remove(selectedOption);
	}
}
