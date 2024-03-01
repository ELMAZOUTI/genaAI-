class MainWebComponent extends HTMLElement {
    async post(apiKey, endpoint, prompt) {
      // Note : apiKey et endpoint ne sont plus utilisés ici, car la clé API est gérée côté serveur.
      try {
        const response = await fetch('http://localhost:3000/api/generate-text', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ prompt: prompt }),
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
  
        const data = await response.json();
        console.log(data); // Ou manipuler les données de réponse comme nécessaire
        return data.choices[0].text; // Assurez-vous que cette partie correspond à la structure de votre réponse.
      } catch (error) {
        console.error("Error in posting data to proxy:", error);
      }
    }
  }
  
  customElements.define("custom-widget", MainWebComponent);
  