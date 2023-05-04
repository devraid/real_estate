import UIModalWrapper from '@/components/UI/Modals/Wrapper'
import { useState, ChangeEvent, createRef } from 'react'

const FormSignInRegister = () => {
  const registerPassword = createRef<HTMLInputElement>()
  const registerRepeatPassword = createRef<HTMLInputElement>()
  const [errorSignInEmail, setErrorSignInEmail] = useState<string>('')
  const [errorSignInPassword, setErrorSignInPassword] = useState<string>('')
  const [errorRegisterEmail, setErrorRegisterEmail] = useState<string>('')
  const [errorRegisterFirstName, setErrorRegisterFirstName] = useState<string>('')
  const [errorRegisterLastName, setErrorRegisterLastName] = useState<string>('')
  const [errorRegisterPassword, setErrorRegisterPassword] = useState<string>('')
  const [errorRegisterRepeatPassword, setErrorRegisterRepeatPassword] = useState<string>('')
  const emailFormat = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  )

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case 'signin_email':
        setErrorSignInEmail(emailFormat.test(e.target.value.trim()) ? '' : 'Invalid Email')
        break
      case 'signin_password':
        setErrorSignInPassword(e.target.value.trim() ? '' : 'Invalid Password')
        break
      case 'register_email':
        setErrorRegisterEmail(emailFormat.test(e.target.value.trim()) ? '' : 'Invalid Email')
        break
      case 'register_first_name':
        setErrorRegisterFirstName(e.target.value.trim() ? '' : 'Invalid First Name')
        break
      case 'register_last_name':
        setErrorRegisterLastName(e.target.value.trim() ? '' : 'Invalid Last Name')
        break
      case 'register_password':
        setErrorRegisterPassword(e.target.value.trim() ? '' : 'Invalid Password')
        break
      case 'register_repeat_password':
        setErrorRegisterRepeatPassword(
          e.target.value.trim()
            ? registerPassword.current?.value.trim() !== e.target.value.trim() &&
              registerRepeatPassword.current?.value.trim()
              ? "Passwords don't match"
              : ''
            : 'Invalid Password'
        )
        break
    }
  }

  return (
    <div className="form-signin-register">
      <UIModalWrapper>
        <div
          v-if="restPassword === 0"
          className="signin flex-1 pb-5 md:pb-0 md:pr-10 max-md:border-b md:border-r border-solid border-gray-3"
        >
          <h4 className="font-avenir-next-heavy text-xl mb-3">Sign In</h4>
          <input
            className="font-avenir-next-book text-sm md:text-base text-gray w-full px-2 py-1 md:px-3 md:py-2 appearance-none outline-none border-solid border border-gray-3 focus:border-gray-5  transition-colors"
            type="text"
            name="signin_email"
            maxLength={100}
            spellCheck="false"
            placeholder="Email"
            autoComplete="email"
            onBlur={(e) => handleInput(e)}
            onChange={(e) => handleInput(e)}
          />
          <div className="error mb-3">
            {errorSignInEmail && (
              <span className="inline-block w-full mt-1 font-avenir-next-book text-sm text-gray text-red-500">
                {errorSignInEmail}
              </span>
            )}
          </div>
          <input
            className="font-avenir-next-book text-sm md:text-base text-gray w-full px-2 py-1 md:px-3 md:py-2 appearance-none outline-none border-solid border border-gray-3 focus:border-gray-5  transition-colors"
            type="password"
            name="signin_password"
            maxLength={50}
            spellCheck="false"
            placeholder="Password"
            autoComplete="current-password"
            onBlur={(e) => handleInput(e)}
            onChange={(e) => handleInput(e)}
          />
          <div className="error mb-3">
            {errorSignInPassword && (
              <span className="inline-block w-full mt-1 font-avenir-next-book text-sm text-gray text-red-500">
                {errorSignInPassword}
              </span>
            )}
          </div>
        </div>
        <div className="register flex-1 pt-5 md:pt-0 md:pl-10">
          <h4 className="font-avenir-next-heavy text-xl mb-3">Register</h4>
          <input
            className="font-avenir-next-book text-sm md:text-base text-gray w-full px-2 py-1 md:px-3 md:py-2 appearance-none outline-none border-solid border border-gray-3 focus:border-gray-5  transition-colors"
            type="text"
            name="register_first_name"
            maxLength={100}
            spellCheck="false"
            placeholder="First Name"
            autoComplete="nope"
            onBlur={(e) => handleInput(e)}
            onChange={(e) => handleInput(e)}
          />
          <div className="error mb-3">
            {errorRegisterFirstName && (
              <span className="inline-block w-full mt-1 font-avenir-next-book text-sm text-gray text-red-500">
                {errorRegisterFirstName}
              </span>
            )}
          </div>
          <input
            className="font-avenir-next-book text-sm md:text-base text-gray w-full px-2 py-1 md:px-3 md:py-2 appearance-none outline-none border-solid border border-gray-3 focus:border-gray-5  transition-colors"
            type="text"
            name="register_last_name"
            maxLength={100}
            spellCheck="false"
            placeholder="Last Name"
            autoComplete="nope"
            onBlur={(e) => handleInput(e)}
            onChange={(e) => handleInput(e)}
          />
          <div className="error mb-3">
            {errorRegisterLastName && (
              <span className="inline-block w-full mt-1 font-avenir-next-book text-sm text-gray text-red-500">
                {errorRegisterLastName}
              </span>
            )}
          </div>
          <input
            className="font-avenir-next-book text-sm md:text-base text-gray w-full px-2 py-1 md:px-3 md:py-2 appearance-none outline-none border-solid border border-gray-3 focus:border-gray-5  transition-colors"
            type="text"
            name="register_email"
            maxLength={100}
            spellCheck="false"
            placeholder="Email"
            autoComplete="nope"
            onBlur={(e) => handleInput(e)}
            onChange={(e) => handleInput(e)}
          />
          <div className="error mb-3">
            {errorRegisterEmail && (
              <span className="inline-block w-full mt-1 font-avenir-next-book text-sm text-gray text-red-500">
                {errorRegisterEmail}
              </span>
            )}
          </div>
          <input
            ref={registerPassword}
            className="font-avenir-next-book text-sm md:text-base text-gray w-full px-2 py-1 md:px-3 md:py-2 appearance-none outline-none border-solid border border-gray-3 focus:border-gray-5  transition-colors"
            type="password"
            name="register_password"
            maxLength={50}
            spellCheck="false"
            placeholder="Password"
            autoComplete="nope"
            onBlur={(e) => handleInput(e)}
            onChange={(e) => handleInput(e)}
          />
          <div className="error mb-3">
            {errorRegisterPassword && (
              <span className="inline-block w-full mt-1 font-avenir-next-book text-sm text-gray text-red-500">
                {errorRegisterPassword}
              </span>
            )}
          </div>
          <input
            ref={registerRepeatPassword}
            className="font-avenir-next-book text-sm md:text-base text-gray w-full px-2 py-1 md:px-3 md:py-2 appearance-none outline-none border-solid border border-gray-3 focus:border-gray-5  transition-colors"
            type="password"
            name="register_repeat_password"
            maxLength={50}
            spellCheck="false"
            placeholder="Repeat Password"
            autoComplete="nope"
            onBlur={(e) => handleInput(e)}
            onChange={(e) => handleInput(e)}
          />
          <div className="error mb-3">
            {errorRegisterRepeatPassword && (
              <span className="inline-block w-full mt-1 font-avenir-next-book text-sm text-gray text-red-500">
                {errorRegisterRepeatPassword}
              </span>
            )}
          </div>
          <div className="flex items-center mb-3">
            <input
              className="appearance-none w-5 h-5 cursor-pointer outline-none border-solid border border-gray-3 bg-center bg-no-repeat bg-contain bg-transparent checked:bg-[url('/assets/icons/checkbox.svg')] checked:bg-green-5 checked:border-green-5 h-4 w-4"
              type="checkbox"
              name="register_terms_conditions"
            />
            <label className="font-avenir-next-book text-sm text-gray ml-3">
              I agree to the{' '}
              <a href="#" className="font-avenir-next-book text-sm text-gray underline">
                terms and conditions
              </a>
            </label>
          </div>
          <div className="error mb-3">
            <span
              v-if="v$.register_terms_conditions.$error"
              className="inline-block w-full mt-1 font-avenir-next-book text-sm text-gray text-red-500"
            ></span>
          </div>
          <a
            role="button"
            className="inline-block bg-green-7 hover:bg-green-5 font-avenir-next-heavy text-sm md:text-base text-white uppercase px-8 pt-3 pb-2 transition-colors rounded-md"
          >
            Free Registration
          </a>
        </div>
      </UIModalWrapper>
    </div>
  )
}

export default FormSignInRegister
