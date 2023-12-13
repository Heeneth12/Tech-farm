import React, { Component } from "react";
import PocketBase from "pocketbase";

class ContactCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { firstName, lastName, email, phoneNumber, message } = this.state;

    try {
      // Create data object based on form input
      const pb = new PocketBase("http://127.0.0.1:8090");
      const data = {
        first_name: firstName,
        last_name: lastName,
        email,
        phone_number: phoneNumber,
        message,
      };

      // Create a record in PocketBase collection 'post' with the form data
      const record = await pb.collection("post").create(data);

      console.log("Record created:", record);

      // Handle success or any other necessary logic here after creating the record
    } catch (error) {
      console.error("Error creating record:", error);
      // Handle error state or display error message to the user
    }
  };

  render() {
    return (
      <div className="contact-container  flex bg-gray-100 rounded-md p-8 shadow-lg">
        <div className="details flex-1 p-4">
          <h2 className="text-2xl font-bold mb-4">Contact Details</h2>
        </div>

        <div
          className="form flex-1  p-4 bg-white  rounded-md"
          style={{
            height: "50vh",
          }}
        >
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="mb-4 flex">
              <div className="w-1/2 pr-2">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700"
                  style={{
                    float: "left",
                    fontWeight: "bold",
                  }}
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="first-name"
                  name="firstName"
                  value={this.state.firstName}
                  onChange={this.handleChange}
                  style={{
                    borderWidth: 2,
                  }}
                  className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:ring focus:ring-indigo-200"
                  required
                />
              </div>
              <div className="w-1/2 pl-2">
                <label
                  htmlFor="last-name"
                  style={{
                    float: "left",
                    fontWeight: "bold",
                  }}
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="last-name"
                  name="lastName"
                  value={this.state.lastName}
                  style={{
                    borderWidth: 2,
                  }}
                  onChange={this.handleChange}
                  className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:ring focus:ring-indigo-200"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                style={{
                  float: "left",
                  fontWeight: "bold",
                }}
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                style={{
                  borderWidth: 2,
                }}
                className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:ring focus:ring-indigo-200"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="phone-number"
                style={{
                  float: "left",
                  fontWeight: "bold",
                }}
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone-number"
                name="phoneNumber"
                value={this.state.phoneNumber}
                onChange={this.handleChange}
                style={{
                  borderWidth: 2,
                }}
                className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:ring focus:ring-indigo-200"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                style={{
                  float: "left",
                  fontWeight: "bold",
                }}
                className="block text-sm font-medium-text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={this.state.message}
                onChange={this.handleChange}
                rows="4"
                style={{
                  borderWidth: 2,
                }}
                className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:ring focus:ring-indigo-200"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              onClick={this.handleSubmit}
              className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default ContactCard;
