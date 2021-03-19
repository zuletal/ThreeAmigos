import { render, screen } from '@testing-library/react';
import StationCard from '../components/StationCard';

test('renders the station name', () => {
  render(<StationCard station={{station_name: "Test Station", time: Date.now()/1000}} />);
  const linkElement = screen.getByText(/test station/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders the time since last report', () => {
  render(<StationCard station={{station_name: "Test Station", time: new Date(2020)}} />);
  const linkElement = screen.getByText(/More than a week ago/i);
  expect(linkElement).toBeInTheDocument();
});