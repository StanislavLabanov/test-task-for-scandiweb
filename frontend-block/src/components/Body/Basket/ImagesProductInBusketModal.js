import React from "react";
import img1 from "../../Header/image/Vector (2).png"
import img2 from "../../Header/image/Vector (3).png"

class ImagesProductInBusket extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         offset: 0
      }
   }

   leftTransform = () => {
      this.state.offset > -110
         ? this.setState({ offset: -110 * (this.props.images.length - 1) })
         : this.setState({ offset: this.state.offset + 110 })
   }

   rightTransform = () => {
      - this.state.offset > 110 * (this.props.images.length - 2)
         ? this.setState({ offset: 0 })
         : this.setState({ offset: this.state.offset - 110 })
   }

   render() {
      return (
         <div className="images_conteiner">
            <div className="images_flex_block" style={{ width: 110 * this.props.images.length, left: this.state.offset + 'px' }}>
               {
                  this.props.images.map(el => <img key={el} src={el} />)
               }
            </div>
            {
               this.props.images.length > 1
                  ?
                  <div className="arrows">
                     <div className="arrow_left" onClick={() => this.leftTransform()}>
                        <img src={img1} />
                     </div>
                     <div className="arrow_right" onClick={() => this.rightTransform()}>
                        <img src={img2} />
                     </div>
                  </div>
                  : null
            }
         </div>
      )
   }
}

export default ImagesProductInBusket