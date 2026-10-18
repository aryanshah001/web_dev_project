

function Footer() {
  return (
    <footer className="border-t border-black bg-black text-white px-4 py-6 sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 text-center sm:flex-row sm:text-left">

        {/* Know us. */}
        <div>
          <div className="text-md font-semibold text-white mb-3">Get to know us</div>
          <div className="text-sm"><p>About Amazon</p>
          <p>Career</p>
          <p>Amazon science</p></div>
        </div>
        
        {/* Connect with us. */}
        <div>
          <div className="text-md font-semibold text-white mb-3">Connect with us</div>
          <div className="text-sm"><p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p></div>
        </div>

        {/* Make Money with us */}
        <div>
          <div className="text-md font-semibold text-white mb-3">Make Money with us</div>
          <div className="text-sm"><p>Sell on Amazon</p>
          <p>Protect and Build Your Brand</p>
          <p>Become an Affiliate</p></div>
        </div>

        {/* Let Us Help You */}
        <div>
          <div className="text-md font-semibold text-white mb-3">Let Us Help You</div>
          <div className="text-sm"><p>Sell on Amazon</p>
          <p>Protect and Build Your Brand</p>
          <p>Become an Affiliate</p></div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
