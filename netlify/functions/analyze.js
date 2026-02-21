const { GoogleGenerativeAI } = require("@google/generative-ai");
exports.handler = async (event) => {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  try {
    const body = JSON.parse(event.body);
    const result = await model.generateContent([
      "Analyze this Ontario CAS document and draft a Statement of Facts:",
      body.caseData || "",
      body.fileData ? { inlineData: { data: body.fileData, mimeType: body.mimeType } } : ""
    ]);
    return { statusCode: 200, body: JSON.stringify({ text: (await result.response).text() }) };
  } catch (e) { return { statusCode: 500, body: JSON.stringify({ error: e.message }) }; }
};
