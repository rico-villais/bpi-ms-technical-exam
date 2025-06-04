// import global components
const Forbidden = () => {
  return(
    <div className="flex column">
        <section className="section white-bg the-404">
          <div className="hero flex three-quarter ">
            <div className="yt-container slim">
              <h1> Whoops! <span className="light-weight">Looks like you're not authorized to view this page.</span></h1>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Forbidden;