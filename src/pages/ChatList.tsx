import ChatRow from '../components/ChatRow';

export default function ChatList() {
  return (
    <div>
      <h2
        style={{
          color: '#294AA5',
          fontWeight: 800,
          fontFamily: 'monospace',
        }}>
        Messages
      </h2>
      <ChatRow name='hey' />
    </div>
  );
}
