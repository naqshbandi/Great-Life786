from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from gtts import gTTS
import os

app = FastAPI()

BASE_DIR = "GradeLife786_Data"
os.makedirs(f"{BASE_DIR}/audio", exist_ok=True)
os.makedirs(f"{BASE_DIR}/designs", exist_ok=True)

class MediaRequest(BaseModel):
    project_name: str
    content: str
    lang: str = "ur"

@app.get("/")
def read_root():
    return {"status": "online", "brand": "GradeLife786_API_v1.0"}

@app.post("/generate-audio")
async def generate_audio(request: MediaRequest):
    try:
        file_path = f"{BASE_DIR}/audio/{request.project_name}.mp3"
        tts = gTTS(text=request.content, lang=request.lang)
        tts.save(file_path)
        return {"status": "success", "file_path": file_path}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)