const useHubspotForm = () => {
  const formId = "e43a4c01-64ed-4253-bf76-11c2030d5a32";
  const portalId = "45412697";

  const submitForm = async (email) => {
    try {
      const formResponse = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            submittedAt: Date.now(),
            fields: [
              {
                name: "email",
                value: email,
              },
            ],
          }),
        }
      );

      const formDataResponse = await formResponse.json();

      return formDataResponse.inlineMessage
    } catch (error) {
      console.error(error);
    }
  };
  return {
    submitForm,
  };
};

export default useHubspotForm;
