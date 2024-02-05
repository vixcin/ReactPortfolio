import React from "react"
import sunset from "../sunset.mp4";

function Project() {
    return(
        <div className='d-flex rounded border'>
            <div className="col-6 p-2 ">
                <video className="w-100" autoPlay controls loop src={sunset}></video>
                <h3 className="card-title pt-5">Project Name</h3>
            </div>
            <div className="col-6 p-2 ">
                <div className="card-header d-flex justify-content-between">
                    <div>
                        <span className="badge bg-success me-1"> concept 1</span>
                        <span className="badge bg-success me-1"> concept 2</span>
                        <span className="badge bg-success me-1"> concept 3</span>
                        <span className="badge bg-success me-1"> concept 4</span>
                    </div>
                    <p>12/06/2022</p>
                </div>
                <div className="card-body">
                    <div>
                        <h3>About</h3>
                        <hr />
                        <p>Phasellus sit amet euismod mauris. In tempus diam eget tellus tincidunt tincidunt. Nunc et consequat sapien, nec scelerisque mauris. Maecenas ornare purus sapien, vel tincidunt justo tincidunt quis. Aliquam congue elit vel sagittis mollis. Curabitur nunc lacus, tristique vel elementum id, posuere at magna.</p>
                    </div>
                    <div>
                        <h3>Description</h3>
                        <hr />
                        <p>Suspendisse nec lorem vehicula urna mattis interdum. Sed pretium, nulla consequat volutpat luctus, nisi odio fringilla mauris, quis bibendum augue erat accumsan urna. Mauris iaculis nibh sit amet elit pulvinar ultrices. Phasellus sit amet euismod mauris. In tempus diam eget tellus tincidunt tincidunt. Nunc et consequat sapien, nec scelerisque mauris. Maecenas ornare purus sapien, vel tincidunt justo tincidunt quis. Aliquam congue elit vel sagittis mollis. Curabitur nunc lacus, tristique vel elementum id, posuere at magna</p>
                        <p>Ut nec nibh nisl. Sed quis sem pellentesque, pulvinar ligula at, aliquet nisl. Mauris venenatis eget dui in varius. Morbi fermentum non erat fringilla tempor. Fusce placerat, quam et rhoncus egestas, risus ligula bibendum mauris, sit amet fringilla nisi sem vel velit. Sed iaculis bibendum malesuada. Nulla rhoncus quam mauris, dictum malesuada lorem tincidunt eget. Nunc faucibus nisl dapibus, feugiat nulla non, pellentesque est. Nunc ultricies mi in mollis euismod. Suspendisse nec hendrerit odio. Ut ullamcorper tellus ac efficitur bibendum.</p>
                    </div>
                </div>
                <div className="card-footer d-flex justify-content-between">
                    <a className="btn btn-primary" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">Go to Project</a>
                    <a className="btn btn-warning" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">Back</a>
                </div>
            </div>
        </div>
    )


}
export default Project;