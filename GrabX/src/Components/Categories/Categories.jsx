import "./Categories.scss"

const data = [
  "https://www.pexels.com/photo/woman-posing-for-photo-shoot-1689731/",
  "https://www.pexels.com/photo/woman-posing-for-photo-shoot-1689731/",
  "https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/2065195/pexels-photo-2065195.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=400",
];

const Categories = () => {
  return (
    <div className="Categories">
      <div className="Column">
        <div className="Row">
          R1
        </div>
        <div className="Row">
          R2
        </div>
      </div>
      <div className="Column">
        <div className="Row">
          R3
        </div>
      </div>
      <div className="Column Col">
        <div className="Row">
          <div className="Column">
            <div className="Row">
              R4
            </div>
          </div>
          <div className="Column">
            <div className="Row">
              R5
            </div>
          </div>
        </div>
        <div className="Row">
          R6
        </div>
      </div>

    </div>
  )
}

export default Categories