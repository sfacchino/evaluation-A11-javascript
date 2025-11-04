function isNationalIDValid(name, age, zip, password) {
	if (
		name !== "" &&
		18 >=  age  &&
		age <= 65 &&
		0 <=  zip  &&
		zip <= 99999 &&
		password != "azerty" &&
		password != "qwerty" &&
		password != "1234"
	) {
		return true;
	} else {
		return false;
	}
}

console.log(isNationalIDValid("", 18, 69100, "hello"));
console.log(isNationalIDValid("John", 18, 69100, "amerty"));
