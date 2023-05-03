import UIModalWrapper from '@/components/UI/Modals/Wrapper'

const FormSignInRegister = () => {
    return (
      <div className="form-signin-register">
        <UIModalWrapper>
            <div
            className="register flex-1 pt-5 md:pt-0 md:pl-10">
            <h4 className="font-avenir-next-heavy text-xl mb-3">
              Register
            </h4>
            <div
              className="error mb-3">
              <span className="inline-block w-full mt-1 font-avenir-next-book text-sm text-gray text-red-500">
                test
              </span>
            </div>
            <input
              className="font-avenir-next-book text-sm md:text-base text-gray w-full px-2 py-1 md:px-3 md:py-2 appearance-none outline-none border-solid border border-gray-3 focus:border-gray-5  transition-colors"
              type="text"
              name="register_first_name"
              maxLength={100}
              spellCheck="false"
              placeholder="First Name"
              autoComplete="nope"/>
            <div className="error mb-3">
              <span
                className="inline-block w-full mt-1 font-avenir-next-book text-sm text-gray text-red-500">
                test
              </span>
            </div>
            <input
              v-model="formData.register_last_name"
              className="font-avenir-next-book text-sm md:text-base text-gray w-full px-2 py-1 md:px-3 md:py-2 appearance-none outline-none border-solid border border-gray-3 focus:border-gray-5  transition-colors"
              type="text"
              name="register_last_name"
              maxLength={100}
              spellCheck="false"
              placeholder="Last Name"
              autoComplete="nope"/>
            <div className="error mb-3">
              <span
                className="inline-block w-full mt-1 font-avenir-next-book text-sm text-gray text-red-500">
                test
              </span>
            </div>
            <input
              className="font-avenir-next-book text-sm md:text-base text-gray w-full px-2 py-1 md:px-3 md:py-2 appearance-none outline-none border-solid border border-gray-3 focus:border-gray-5  transition-colors"
              type="text"
              name="register_email"
              maxLength={100}
              spellCheck="false"
              placeholder="Email"
              autoComplete="nope"/>
            <div className="error mb-3">
              <span
                className="inline-block w-full mt-1 font-avenir-next-book text-sm text-gray text-red-500">
                test
              </span>
            </div>
            <input
              className="font-avenir-next-book text-sm md:text-base text-gray w-full px-2 py-1 md:px-3 md:py-2 appearance-none outline-none border-solid border border-gray-3 focus:border-gray-5  transition-colors"
              type="password"
              name="register_password"
              maxLength={50}
              spellCheck="false"
              placeholder="Password"
              autoComplete="nope"/>
            <div className="error mb-3">
              <span
                className="inline-block w-full mt-1 font-avenir-next-book text-sm text-gray text-red-500">
                test
              </span>
            </div>
            <input
              className="font-avenir-next-book text-sm md:text-base text-gray w-full px-2 py-1 md:px-3 md:py-2 appearance-none outline-none border-solid border border-gray-3 focus:border-gray-5  transition-colors"
              type="password"
              name="register_confirm_password"
              maxLength={50}
              spellCheck="false"
              placeholder="Repeat Password"
              autoComplete="nope"/>
            <div className="error mb-3">
              <span
                className="inline-block w-full mt-1 font-avenir-next-book text-sm text-gray text-red-500">
                test
              </span>
            </div>
            <div className="flex items-center mb-3">
              <input
                className="appearance-none w-5 h-5 cursor-pointer outline-none border-solid border border-gray-3 bg-center bg-no-repeat bg-contain bg-transparent checked:bg-[url('/assets/icons/checkbox.svg')] checked:bg-green-5 checked:border-green-5 h-4 w-4"
                type="checkbox"
                name="register_terms_conditions"/>
              <label
                className="font-avenir-next-book text-sm text-gray ml-3">I agree to the <a
                  href="#"
                  className="font-avenir-next-book text-sm text-gray underline">terms and conditions</a>
              </label>
            </div>
            <div className="error mb-3">
              <span
                v-if="v$.register_terms_conditions.$error"
                className="inline-block w-full mt-1 font-avenir-next-book text-sm text-gray text-red-500">
                test
              </span>
            </div>
            <a
              role="button"
              className="inline-block bg-green-7 hover:bg-green-5 font-avenir-next-heavy text-sm md:text-base text-white uppercase px-8 pt-3 pb-2 transition-colors rounded-md">
              Free Registration
            </a>
          </div>
        </UIModalWrapper>
      </div>
    )
  }
  
  export default FormSignInRegister