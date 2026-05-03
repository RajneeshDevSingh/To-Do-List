export const getSavedData = ()=>
{
    const savedData = localStorage.getItem("tasks");
    return savedData ? JSON.parse(savedData) : [];
}

export const updateLOcalStorage = (tasks)=>
{
    localStorage.setItem("tasks", JSON.stringify(tasks));
}