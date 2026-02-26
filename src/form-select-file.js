// react/app1/src/form-select-file.js
import React from "react";

export default function FormSelectFile() {
    const inputFile = React.useRef();
    const selectMaxNumFiles = React.useRef();
    const selectMaxSize = React.useRef();

    let maxNumfiles = [1, 2, 3, 4, 5]; //จำนวนไฟล์เลือกได้
    let maxSize = [50, 100, 200, 500, 1000]; //ขนาดสูงสุดของไฟล์ (KB)

    //เมื่อคลิกปุ่ม ให้นำค่าจาก select ทั้งสองอันมาเป็นเงื่อนไขตรวจสอบไฟล์
    const onClickButton = () => {
        let maxNumFiles = selectMaxNumFiles.current.value;
        let maxFileSize = selectMaxSize.current.value;

        //ตรวจสอบจำนวนไฟล์
        if (inputFile.current.files.length > maxNumFiles) {
            alert(`เลือกได้ไม่เกิน ${maxNumFiles} ไฟล์`);
            return;
        }

        //ตรวจสอบขนาดของแต่ละไฟล์
        for (let f of inputFile.current.files) {
            if (f.size > maxFileSize * 1000) {
                alert(`ขนาดไฟล์ต้องไม่เกิน ${maxFileSize} KB`);
                return;
            }
        }

        alert("Files OK");
    };

    return (
        <div className="mt-4 mx-auto p-3 rounded" style={{ width: "400px", background: "#cee" }}>
            <form>
                <div className="form-group mb-3">
                    <label htmlFor="maxNumFiles" className="form-label">
                        จำนวนไฟล์สูงสุด
                    </label>
                    <select
                        id="maxNumFiles"
                        className="form-select form-select-sm"
                        ref={selectMaxNumFiles}
                        defaultValue={maxNumfiles[0]}
                    >
                        {maxNumfiles.map((i) => {
                            return (
                                <option key={i} value={i}>
                                    {i}
                                </option>
                            );
                        })}
                    </select>
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="maxFileSize" className="form-label">
                        ขนาดไฟล์สูงสุด (KB)
                    </label>
                    <select
                        id="maxFileSize"
                        className="form-select form-select-sm"
                        ref={selectMaxSize}
                        defaultValue={maxSize[0]}
                    >
                        {maxSize.map((i) => {
                            return (
                                <option key={i} value={i}>
                                    {i}
                                </option>
                            );
                        })}
                    </select>
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="file" className="form-label">
                        เลือกไฟล์
                    </label>
                    <input
                        type="file"
                        id="file"
                        accept="image/*"
                        className="form-control form-control-sm"
                        ref={inputFile}
                        multiple
                    />
                </div>

                <div className="text-center mt-4">
                    <button type="button" className="btn btn-sm btn-primary px-4" onClick={onClickButton}>
                        OK
                    </button>
                </div>
            </form>
        </div>
    );
}