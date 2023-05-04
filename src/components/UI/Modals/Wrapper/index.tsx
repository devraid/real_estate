type Props = {
  children: string | JSX.Element | JSX.Element[]
}

const UIModalWrapper = ({ children }: Props) => {
  return (
    <div className="ui-modal-wrapper flex justify-center md:items-center w-screen h-screen fixed top-0 left-0 p-5 bg-[rgba(255,255,255,0.1)] overflow-y-auto">
      <div className="flex flex-col md:flex-row relative m-0 p-5 md:p-10 w-full h-fit max-w-screen-sm lg:max-w-screen-md bg-white border border-solid border-gray-5 shadow-[2px_2px_6px_rgba(0,0,0,0.1)] rounded-lg">
        <button className="appearance-none outline-none text-base text-black absolute top-5 right-5">
          <svg className="transition-all fill-black hover:fill-green-5 h-5 w-5">
            <path d="M12.018 10 21 18.554 19.481 20 10.5 11.446 1.518 20 0 18.554 8.981 10 0 1.446 1.518 0 10.5 8.554 19.481 0 21 1.446z" />
          </svg>
        </button>
        {children}
      </div>
    </div>
  )
}

export default UIModalWrapper
