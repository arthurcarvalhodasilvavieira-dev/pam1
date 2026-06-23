package com.example.myapplication

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.EditText
import android.widget.TextView
import android.widget.Toast

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
    }

    fun login (view: View) {
        val email = findViewById<EditText>(R.id.log_email).text.toString()
        val senha = findViewById<EditText>().text.toString()

        if (email == "lucas@htmail.com" && senha == "abcd@1234") {
            Toast.makeText(this, "Logado com Sucesso", Toast.LENGTH_SHORT).show()

            // Abrindo HomeActivity
            val intent = intent(this, HomeActivity::class.java)
            startActivity(intent)
            finish() // opcional, evita voltar para login

        } else {
            Toast.makeText(this, "Email ou Senha invalidos", Toast.LENGTH_SHORT).show
        }
    }
}