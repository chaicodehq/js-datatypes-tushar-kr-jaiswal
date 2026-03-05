/**
 * 🚂 Mumbai Local Train Pass Generator
 *
 * Aaj se tu Mumbai local ka digital pass system bana raha hai! Passenger
 * ka data milega aur tujhe ek formatted pass string generate karni hai.
 * Pass mein sab details honi chahiye ek specific format mein.
 *
 * Rules:
 *   - passenger object mein required fields: name, from, to, classType
 *   - classType must be "first" ya "second" (case-insensitive check)
 *   - Pass ID generate karo:
 *     classType ka first char uppercase + from ke pehle 3 letters uppercase
 *     + to ke pehle 3 letters uppercase
 *     Example: "first", "dadar", "andheri" => "F" + "DAD" + "AND" = "FDADAND"
 *   - Output format using template literal:
 *     Line 1: "MUMBAI LOCAL PASS"
 *     Line 2: "---"
 *     Line 3: "Name: <NAME IN UPPERCASE>"
 *     Line 4: "From: <From in Title Case>"
 *     Line 5: "To: <To in Title Case>"
 *     Line 6: "Class: <FIRST or SECOND>"
 *     Line 7: "Pass ID: <PASSID>"
 *   - Title Case = first letter uppercase, rest lowercase
 *   - Lines are separated by \n (newline)
 *   - Hint: Use template literals, slice(), toUpperCase(), toLowerCase(),
 *     charAt(), typeof
 *
 * Validation:
 *   - Agar passenger object nahi hai ya null hai, return "INVALID PASS"
 *   - Agar koi required field (name, from, to, classType) missing hai
 *     ya empty string hai, return "INVALID PASS"
 *   - Agar classType "first" ya "second" nahi hai, return "INVALID PASS"
 *
 * @param {{ name: string, from: string, to: string, classType: string }} passenger
 * @returns {string} Formatted pass or "INVALID PASS"
 *
 * @example
 *   generateLocalPass({ name: "rahul sharma", from: "dadar", to: "andheri", classType: "first" })
 *   // => "MUMBAI LOCAL PASS\n---\nName: RAHUL SHARMA\nFrom: Dadar\nTo: Andheri\nClass: FIRST\nPass ID: FDADAND"
 *
 *   generateLocalPass(null)
 *   // => "INVALID PASS"
 */
export function generateLocalPass(passenger) {
    if (passenger === null || typeof passenger !== "object" || Object.keys(passenger).length === 0)
        return "INVALID PASS";

    let name = passenger.name;
    let from = passenger.from;
    let to = passenger.to;
    let classType = passenger.classType.toLowerCase();

    if (typeof name !== "string" || String(name).trim() === "") return "INVALID PASS";
    if (typeof from !== "string" || String(from).trim() === "") return "INVALID PASS";
    if (typeof to !== "string" || String(to).trim() === "") return "INVALID PASS";
    if (typeof classType !== "string" || String(classType).trim() === "") return "INVALID PASS";
    if (classType.trim() !== "first" && classType.trim() !== "second") return "INVALID PASS";

    name = name.trim().toUpperCase();
    from = from.slice(0, 1).toUpperCase() + from.slice(1).toLowerCase();
    to = to.slice(0, 1).toUpperCase() + to.slice(1).toLowerCase();
    classType = classType.trim().toUpperCase();
    let passID = `${classType.slice(0, 1)}${from.slice(0, 3)}${to.slice(0, 3)}`.toUpperCase();

    let trainPass = `MUMBAI LOCAL PASS\n---\nName: ${name}\nFrom: ${from}\nTo: ${to}\nClass: ${classType}\nPass ID: ${passID}`;

    return trainPass;
}
