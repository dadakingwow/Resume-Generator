import "./header.css";

function Header({
  firstName,
  lastName,
  newFirstName,
  newLastName,
  email,
  newEmail,
  phoneNumber,
  newPhoneNumber,
}) {
  return (
    <div className="header">
      <label>
        First Name :
        <input value={firstName} onChange={newFirstName} />
      </label>
      <label>
        Last Name :
        <input value={lastName} onChange={newLastName} />
      </label>

      <label>
        Email :
        <input value={email} onChange={newEmail} />
      </label>
      <label>
        Phone Number :
        <input value={phoneNumber} onChange={newPhoneNumber} />
      </label>
    </div>
  );
}

export default Header;
