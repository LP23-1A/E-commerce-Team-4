"use client";
import { Arrowlogo } from "@/images";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

export const Chart = () => {
    return (
        <div className="bg-[#fff] rounded-[10px]">
            <div className="flex items-center justify-between">
                <h1 className="pty-[24px]">Борлуулалт</h1>
                <Arrowlogo/>
            </div>
            <div>
                <Bar
                style={{ width: "fit"}}
                data={{
                labels :['3/18', '3/19', '3/20', '3/21', '3/22' , '3/23'] ,  
                datasets: [
                    {
                        label: "Борлуулалт",
                        backgroundColor: "#000",
                        hoverBackgroundColor: "#000",
                        hoverBorderColor: "#000",
                        data: [200, 300, 400 ,500, 100, 600],
                        borderRadius: 10,
                        borderWidth: 1,
                        borderSkipped: false,
                        barPercentage: 0.2,
                        },
                    ],
                }}
                />
            </div>
        </div>
  );
}
ChartJS;