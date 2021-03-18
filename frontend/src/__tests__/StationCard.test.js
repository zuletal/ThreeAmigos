import { render, screen } from '@testing-library/react';
import StationCard from '../components/StationCard';

test('renders the station name', () => {
  render(<StationCard station={{station_name: "Test Station", time: "5 minutes ago"}} />);
  const linkElement = screen.getByText(/test station/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders the time since last report', () => {
  render(<StationCard station={{station_name: "Test Station", time: "5 minutes ago"}} />);
  const linkElement = screen.getByText(/5 minutes ago/i);
  expect(linkElement).toBeInTheDocument();
});