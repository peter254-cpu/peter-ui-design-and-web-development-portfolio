
const Footer = () => {
  return (
    <section className="w-full  " id="footer">
        <div className="flex flex-col bg-gray-950 items-center lg:flex-row lg:justify-between ">
            <div className="pt-7 flex justify-between items-center p-4 mr-6">
            <div className="text-gray-200 flex gap-2">
                <p>Terms $ Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>
        </div>
        <div className="flex gap-3 mr-4">
            <a href="https://github.com/peter254-cpu" className="social-icon hover:cursor-pointer" target="_blank">
                <img src="/assets/github.svg"  alt="github" className="w-1/2 h-1/2 bg-gray-900" />
            </a>
            <a className="social-icon hover:cursor-pointer" target="_blank" href="https://www.facebook.com/profile.php?id=100093427117167">
                <img src="/assets/facebook.png"  alt="facebook" className="w-1/2 h-1/2" />
            </a>
            <a className="social-icon hover:cursor-pointer" href="https://www.behance.net/peeterkiruhi" target="_blank">
                <img src="/assets/behance.png"  alt="behance" className="w-1/2 h-1/2" />
            </a>
            <a className="social-icon hover:cursor-pointer" target="_blank">
                <img src="/assets/x.png"  alt="x" className="w-1/2 h-1/2" />
            </a>
            <a className="social-icon hover:cursor-pointer" href="https://wa.link/om8aa8" target="_blank">
                <img src="/assets/whatsapp.png"  alt="whatsapp" className="w-1/2 h-1/2" />
            </a>
        </div>
        </div>
    </section>
  )
}

export default Footer