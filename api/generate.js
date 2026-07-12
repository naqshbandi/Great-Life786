<script>
    let tool = "";
    // بٹنوں کو سلیکٹ کرنے کا فنکشن
    document.querySelectorAll('.grid button').forEach(button => {
        button.onclick = function() {
            document.querySelectorAll('.grid button').forEach(b => b.style.background = 'rgba(255, 255, 255, 0.05)');
            this.style.background = '#007bff';
            tool = this.innerText;
        };
    });

    // سبمٹ بٹن کا فنکشن
    document.querySelector('.submit-btn').onclick = async function() {
        const prompt = document.querySelector('textarea').value;
        if(!tool || !prompt) { alert("براہ کرم ٹول اور پرامپٹ دونوں منتخب کریں!"); return; }
        
        try {
            const res = await fetch('/api/generate', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ prompt, tool })
            });
            const data = await res.json();
            alert(data.message);
        } catch (e) {
            alert("سرور سے رابطہ نہیں ہو رہا۔");
        }
    };
</script>
