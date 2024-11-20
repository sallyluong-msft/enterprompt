const { render, screen } = require('@testing-library/react');
const ChatHistory = require('./ChatHistory');

test('renders ChatHistory component', () => {
	render(<ChatHistory />);
	const linkElement = screen.getByText(/chat history/i);
	expect(linkElement).toBeInTheDocument();
});

test('displays messages correctly', () => {
	const messages = ['Hello', 'How are you?'];
	render(<ChatHistory messages={messages} />);
	messages.forEach(message => {
		expect(screen.getByText(message)).toBeInTheDocument();
	});
});