// Example component that violates React Compiler rules
function MyComponent(props) {
  // This violates the rule: mutating props directly
  props.value = 42;
  
  return <div>{props.value}</div>;
}

export default MyComponent;
