import { render, screen } from "@testing-library/react";
import LatestReports from "../components/LatestReports";

test("renders the station name", () => {
    render(
        <LatestReports
            reports={[
                {
                    id: 21,
                    station_id: 62,
                    user_id: 1,
                    time: 1616104282,
                },
            ]}
        />
    );
    const latestReports = screen.getByText(/latest reports/i);
    expect(latestReports).toBeInTheDocument();
    const time = screen.getByText(/3:51:22 PM/);
    expect(time).toBeInTheDocument();
    const date = screen.getByText(/Thu, Mar 18, 2021/);
    expect(date).toBeInTheDocument();
});
