import Router from 'next/router';

const ErrorPage = () => {
        return (
                <div className=" flex flex-col  justify-center items-center h-screen">
                        <img src="https://wrkyimages.s3.ap-south-1.amazonaws.com/wrky-frontend-v1/404.svg" />
                        <div className="mt-10 flex flex-col items-center">
                                <span className=" text-6 font-semibold ">
                                        Page not found
                                </span>
                                <span className=" text-5  mt-2 text-auditLogComment ">
                                        Sorry, the page you’re looking for dosen’t exist or some error occured
                                </span>
                        </div>
                         <button  onClick={() => Router.push('/')} className="  bg-blue-600 text-white rounded-lg  p-2   mt-7 border">
                                Go Back
                        </button>              
                </div>
        )
}

export default ErrorPage;