import React from 'react'

const Home = () => {
  return (
    <div>
      <div>
        <div className="row">
          <div className="col-lg-2"></div>

          <div className="col-lg-8 my-3">
            <h1 className="display-1 text-center">Welcome to Zetflix</h1>
            <p className="text-center lead">Watch Free Movies & TV Shows Online</p>
          </div>

          <div className="col-lg-2"></div>
        </div>
      </div>

      <div className="d-flex justify-content-center mt-5">

        <div className="card text-center img-hover-zoom" style={{ width: "20rem", height: "480px" }}>
          <a href="/films"><img className="card-img-top" src="https://images-na.ssl-images-amazon.com/images/I/51%2BYBX%2BJLoL._AC_SY780_.jpg" alt="" /></a>
          <div className="card-body">
            <h2 className="card-title">Films</h2>
          </div>
        </div>

        <div className="card text-center ml-5 img-hover-zoom" style={{ width: "20rem", height: "480px" }}>
          <a href="/series"><img className="card-img-top" style={{ height: "478px" }} src="https://media.fstatic.com/HiysnAiQjtqJKYCWjOCxUe-y2YQ=/290x478/smart/media/movies/covers/2016/08/peaky3__08190_zoom.jpg" alt="" /></a>
          <div className="card-body">
            <h2 className="card-title">Series</h2>
          </div>
        </div>
      </div>

    </div >
  )
}

export default Home
