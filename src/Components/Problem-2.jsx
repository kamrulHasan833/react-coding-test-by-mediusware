import { useEffect, useState } from "react";

const Problem2 = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("https://contact.mediusware.com/api-doc", { credentials: "include" })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  console.log("ji");
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <button className="btn btn-lg btn-outline-primary" type="button">
            All Contacts
          </button>
          <button className="btn btn-lg btn-outline-warning" type="button">
            US Contacts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Problem2;
