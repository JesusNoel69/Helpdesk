function Principal() {
  return (
    <>
      <div className="container-principal">
        <div>
          <button>filter</button>
          <input type="text" />
          <button>Find</button>
        </div>

        <div>
          <div id="card">
            {/* ticket column name */}
            <h5>
              Title <span>(counter)</span>
            </h5>
            {/* button add ticket */}
            <div>Ticket Add +</div>
            {/* each ticket */}
            <div id="ticket">
              <header id="ticketheader">
                <p>Ticket Name</p>
                <p>#1</p>
              </header>
              <section id="body">
                <div id="time">
                  <div>HH:MM:SS</div>
                  <div>00:05:15</div>
                </div>
                <div>Some Ticket Information</div>
              </section>
              <footer>
                <img src="..." alt="..." id="user"></img>
                <div>tags?</div>
              </footer>
            </div>
            <button>Show More +</button>
          </div>
        </div>

        <div>
          <p>Responsible: ...</p>
          <p>Start: </p> <input type="date"></input>
          <p>Promise End: </p> <input type="date"></input>
          <p>Time: </p> <div>00:05:15</div>
          <p>State: </p> <div></div>
          <div>
            <p>Comments: </p>
            <div>Each Comment</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Principal;
