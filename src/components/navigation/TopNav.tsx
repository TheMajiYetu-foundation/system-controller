
export default function TopNav() {
  return (
    <div className="navbar bg-base-100">
  <div className="flex-none">
  <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
  </label>
    
  </div>
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">Maji Yetu</a>
  </div>
  <div className="flex-none">
    <button type="button" className="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
    </button>
  </div>
</div>
  )
}
