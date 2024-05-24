 import "../welcome/Welcome.scss"

const Welcome = () => {
  return (
    <div className="welcome-box">
        <div className="title-box">
            <div className="line"></div>
            <h1>Welcome</h1>
            <div className="line"></div>
        </div>
        <div className="prize-box">
            <div className="prize-box-1 box">
                <h3>2002</h3>
                <p>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.</p>
            </div>
            <div className="prize-box-2 box">
                <h3>2010</h3>
                <p>Stpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat. Maecenas sollicitudin est in libero pretium.</p>
            </div>
            <div className="prize-box-3 box">
                <h3>2018</h3>
                <p>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.</p>
            </div>
        </div>
    </div>
  )
}

export default Welcome