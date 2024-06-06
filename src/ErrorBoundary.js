import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // 在这里可以处理错误信息，例如记录到日志或更新 state
    console.error('Error caught by ErrorBoundary:', error, info);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      // 渲染备用 UI
      return <div>Oops! Something went wrong.</div>;
    }
    // 正常渲染子组件
    return this.props.children;
  }
}

export default ErrorBoundary;
