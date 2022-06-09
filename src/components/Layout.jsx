export default ({ children }) => (
  <div
    style={{
      background: '#ddd',
      // background: '#FFFBEB',
      display: 'flex',
      flexDirection: 'row',
      // alignItems: 'center',
      justifyContent: 'center',
      width: '100vw',
      minHeight: '100vh'
    }}
  >
    {children}
  </div>
);
