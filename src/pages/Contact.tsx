import { useState, ChangeEvent } from "react";
import CustomButton from "../components/CustomButton";
import Layout from "../components/Layout";
import { httpsCallable } from "firebase/functions";
import { functions } from '../firebase';
import Text from "../components/Text";

type MailInputs = "address" | "message" | "description" | "attachments";

export default function Contact() {
    const [mail, setMail] = useState<{
        address: string;
        message: string;
        description: string;
        attachments: File[];
    }>({
        address: "",
        message: "",
        description: "",
        attachments: []
    });

    

const handleSendBtn = async () => {
    const isValid = validateInputs();
    if (isValid) {
        const formData = new FormData();
        formData.append('email', mail.address);
        formData.append('subject', mail.description); // Use description as the subject
        formData.append('message', mail.message);

        mail.attachments.forEach((file) => {
            formData.append('attachments', file);
        });

        try {
            const sendEmail = httpsCallable(functions, 'sendEmail');
            const response = await sendEmail(formData);

            console.log(response.data); // Handle success (show a message, etc.)
        } catch (error) {
            console.error('Error sending email:', error);
            // Handle error (show an error message, etc.)
        }
    }
};


    const validateInputs = () => {
        return (
            mail.address !== "" &&
            mail.message !== "" &&
            mail.description !== ""
        );
    };

    const handleInputChange = (target: MailInputs) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (target === "attachments") {
            const input = e.target as HTMLInputElement;
            if (input.files) {
                const files = Array.from(input.files).filter(file => 
                    file.type === "image/png" ||
                    file.type === "image/svg" || 
                    file.type === "image/jpeg" || 
                    file.type === "application/pdf" ||
                    file.type === "video/mp4" || 
                    file.type === "video/x-msvideo"
                );
                setMail((prev) => ({ ...prev, attachments: [...prev.attachments, ...files] }));
            }
        } else {
            setMail((prev) => ({ ...prev, [target]: e.target.value }));
        }
    };

    const removeAttachment = (index: number) => {
        setMail((prev) => ({
            ...prev,
            attachments: prev.attachments.filter((_, i) => i !== index)
        }));
    };

    const CustomFileInput = ({
        handleInput,
        attachments,
    }: {
        handleInput: (e: ChangeEvent<HTMLInputElement>) => void;
        attachments: File[];
    }) => {
        const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
            e.preventDefault();
            e.stopPropagation();
            if (e.dataTransfer.files) {
                const files = Array.from(e.dataTransfer.files).filter(file =>
                    file.type === "image/png" ||
                    file.type === "image/jpeg" ||
                    file.type === "application/pdf"
                );
                setMail((prev) => ({ ...prev, attachments: [...prev.attachments, ...files] }));
            }
        };

        const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
            e.preventDefault();
            e.stopPropagation();
        };

        return (
            <div className="flex flex-col md:flex-row">
                <input
                    type="file"
                    onChange={handleInput}
                    className="hidden" // Hide the default file input
                    id="file-input"
                    multiple
                />
                <div
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                    className="flex items-center justify-center rounded-lg  cursor-pointer  transition duration-200 ease-in-out"
                >
                    <CustomButton text="Drop / Upload Files +" btnType="button" />
                </div>
                {attachments.length > 0 && (
                    <div className="ms-3 max-h-24 overflow-auto rounded-lg p-2 border">
                        <h3 className="font-semibold z-10">Selected Files:</h3>
                        <ul className="list-disc list-inside">
                            {attachments.map((file, index) => (
                                <li key={index} className="text-sm flex justify-between">
                                    {file.name.length>15?file.name.slice(0, 15) + "...":file.name}
                                    <button
                                        type="button"
                                        onClick={() => removeAttachment(index)}
                                        className="ml-2 text-red-500"
                                    >
                                        Remove
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        );
    };

    return (
        <Layout progress={0}>
            <div className="h-full items-center justify-center w-full flex overflow-x-hidden">
                <div className="h-full w-full  xl:max-w-7xl flex flex-col md:flex-row md:items-center">
                    <div className="w-full h-fit p-10 pb-0 text-start sm:text-end">
                        <Text text="Contact me" mainColor font="title" size="xl" weight="bold" />
                        <Text text="Let’s build something amazing together!" mainColor={false} font="title" size="md" weight="bold" />
                        <p className="text-3xl"></p>
                    </div>
                    <div className="w-full h-full p-10 md:pt-0">
                        <form className="flex flex-col h-full" aria-label="get in touch">
                            <CustomInput
                                target="address"
                                value={mail.address}
                                handleInput={handleInputChange("address")}
                            />
                            <CustomInput
                                target="description"
                                value={mail.description}
                                handleInput={handleInputChange("description")}
                            />
                            <CustomTextArea
                                target="message"
                                value={mail.message}
                                handleInput={handleInputChange("message")}
                            />
                            <div className="flex items-center justify-between">
                                <CustomFileInput
                                    handleInput={handleInputChange("attachments")}
                                    attachments={mail.attachments}
                                />
                                <div className="h-full">
                                    <CustomButton btnType="submit" handleClick={handleSendBtn} text="Get in touch" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

interface InputProps {
    target: MailInputs;
    value?: string;
    handleInput: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const CustomInput = ({ target, value, handleInput }: InputProps) => {
    return (
        <input
            type="text"
            placeholder={`Enter ${target}`}
            value={value}
            onChange={handleInput}
            className="py-3 px-5 h-16 w-full rounded-3xl mb-3 bg-slate-200 dark:bg-gray-950 bg-opacity-70 dark:bg-opacity-30 backdrop-blur-lg dark:backdrop-blur-lg border-main focus:border-blue-500"
        />
    );
};

const CustomTextArea = ({ target, value, handleInput }: InputProps) => {
    return (
        <textarea
            placeholder={`Enter ${target}`}
            value={value}
            onChange={handleInput}
            rows={4}
            className="py-3 px-5 h-full md:max-h-72 w-full rounded-3xl mb-3 bg-slate-200 dark:bg-gray-950 bg-opacity-70 dark:bg-opacity-30 backdrop-blur-lg dark:backdrop-blur-lg border-main focus:border-blue-500"
        />
    );
};
