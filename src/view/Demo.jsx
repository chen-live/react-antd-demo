import React from "react"
export default class Demo extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
  }
  componentWillUnmount() {
    console.log("componentWillUnmount")
  }
  render() {
    return (
      <div>
        Demo:{this.props.Name}
      </div>
    )
  }
}
// export default (props) => {
//   console.log(props)
//   return (
//     <div>
//       Demo
//     </div>
//   )
// }