export default function StationCard({ station }) {
    return (
        <div>
            <div>{station.station_name}</div>
            <div>{station.time}</div>
        </div>
    );
}
