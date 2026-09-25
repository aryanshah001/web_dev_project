

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 px-4 py-6 sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 text-center sm:flex-row sm:text-left">
        <p className="text-sm font-semibold text-slate-700">This is Footer</p>
        <p className="text-xs text-slate-500">© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
