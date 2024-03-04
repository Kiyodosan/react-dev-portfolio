import { useRef, useState } from "react"
import { hasName } from "../utils/hasName"
import { hasEmail } from "../utils/hasEmail";
import { isValidEmail } from "../utils/isValidEmail";
import { hasMessage } from "../utils/hasMessage";

const Contact = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  const handleMouseLeave = (event) => {
    // console.log(event.target);
    if (event.target === nameRef.current || event.target === emailRef.current || event.target === messageRef.current) {
      switch(event.target) {
        case nameRef.current:
          // console.log("name");
          if(!(hasName(nameRef.current.value))) {
            setNameError('Name is required');
          } else {
            setNameError('');
          }
          break;
        case emailRef.current:
          // console.log("email");
          if(!(hasEmail(emailRef.current.value)) || !(isValidEmail(emailRef.current.value))) {
            if(!(hasEmail(emailRef.current.value))) {
              setEmailError('Email is required');
            } else {
              setEmailError('Valid email is required');
            }
          } else {
            setEmailError('');
          }
          break;
        case messageRef.current:
          // console.log("message");
          if(!(hasMessage(messageRef.current.value))) {
            setMessageError('Message is required');
          } else {
            setMessageError('');
          }
          break;
        default: console.log("Null target");
      }
    }
  }

  return (
    <div>
      <div className="flex justify-center mb-16">
        <h1 className="justify-self-center px-4 text-6xl font-bold text-red-500 font-sans">Contact</h1>
      </div>
      <div className="mx-4 p-1 bg-slate-500 border-2 rounded-lg">
        <form>
          <div className="space-y-12 p-4 bg-white">
            <div className="border-b border-gray-900/10 pb-12">
              <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div id="nameField" className="sm:col-span-4">
                  <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                    Name
                  </label>
                  <div>
                    <div className="mt-2">
                      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          autoComplete="name"
                          className="block flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          placeholder="John Smith"
                          ref={nameRef}
                          onMouseLeave={handleMouseLeave}
                        />
                      </div>
                    </div>
                  </div>
                  {nameError !== '' ? <p className="text-red-500">{nameError}</p> : <p visibility="false"></p>}
                </div>

                <div id="emailField" className="sm:col-span-4">
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email address
                  </label>
                  <div>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2 bg-white"
                        placeholder="email@example.com"
                        ref={emailRef}
                        onMouseLeave={handleMouseLeave}
                      />
                    </div>
                  </div>
                  {emailError !== '' ? <p className="text-red-500">{emailError}</p> : <p visibility="false"></p>}
                </div>

                <div id="msgField" className="col-span-full">
                  <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">
                    Message
                  </label>
                  <div>
                    <div className="mt-2">
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2 bg-white"
                        ref={messageRef}
                        onMouseLeave={handleMouseLeave}
                      />
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-600">Send a message.</p>
                  {messageError !== '' ? <p className="text-red-500">{messageError}</p> : <p visibility="false"></p>}
                </div>
              </div>
            </div>

            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

              {/* <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"> */}
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 mobile:grid-cols-2">
                <div className="sm:col-span-3">
                  <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                    First name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2 bg-white"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                    Last name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2 bg-white"
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2 bg-white"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                    Country
                  </label>
                  <div className="mt-2">
                    <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 px-2 bg-white"
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                  </div>
                </div>

                <div className="col-span-full">
                  <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                    Street address
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="street-address"
                      id="street-address"
                      autoComplete="street-address"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2 bg-white"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2 sm:col-start-1">
                  <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                    City
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="city"
                      id="city"
                      autoComplete="address-level2"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2 bg-white"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                    State / Province
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="region"
                      id="region"
                      autoComplete="address-level1"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2 bg-white"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                    ZIP / Postal code
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="postal-code"
                      id="postal-code"
                      autoComplete="postal-code"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2 bg-white"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-2 flex items-center justify-end gap-x-6">
            <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact