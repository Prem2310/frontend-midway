export default function DataCenterCard({ name, total, region, id }) {
    return (
        <div
            onClick={() => {
                window.location.href = `/data-center/register/${id}`;
            }}
            className="card h-fit p-5 bg-slate-300 rounded-2xl text-slate-700 hover:outline hover:outline-3 hover:outline-black hover:cursor-pointer"
        >
            <div className="card-body">
                <h5 className="card-title font-ibm text-2xl font-bold">
                    {name}
                </h5>
                <p className="card-text mt-10 font-inconsolata">
                    Total Records : {total}
                </p>
                <p className="text-xs opacity-50">{region}</p>
            </div>
        </div>
    );
}
